<?php
namespace AIOSEO\Plugin\Pro\Schema\Graphs;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use AIOSEO\Plugin\Common\Schema\Graphs as CommonGraphs;

/**
 * FAQPage graph class.
 *
 * @since 4.0.13
 */
class FAQPage extends CommonGraphs\WebPage {
	/**
	 * Returns the graph data.
	 *
	 * @since 4.0.13
	 *
	 * @param  Object $blockData The block data.
	 * @return array             The graph data.
	 */
	public function get( $blockData = [] ) {
		if ( ! is_singular() ) {
			return [];
		}

		if ( ! empty( $blockData ) ) {
			if ( ! empty( $blockData->question ) && ! empty( $blockData->answer ) ) {
				return [
					'@type'          => 'Question',
					'name'           => $blockData->question,
					'acceptedAnswer' => [
						'@type' => 'Answer',
						'text'  => $blockData->answer
					]
				];
			}

			return [];
		}

		$subGraphs = [];
		if ( empty( $blockData ) ) {
			$metaData      = aioseo()->meta->metaData->getMetaData();
			$schemaOptions = json_decode( $metaData->schema_type_options );
			if ( empty( $schemaOptions->faq->pages ) ) {
				return [];
			}

			$faqPages = $schemaOptions->faq->pages;
			foreach ( $faqPages as $faqPage ) {
				$faqPage = json_decode( $faqPage );
				if ( empty( $faqPage->question ) || empty( $faqPage->answer ) ) {
					continue;
				}

				$subGraphs[] = [
					'@type'          => 'Question',
					'name'           => $faqPage->question,
					'acceptedAnswer' => [
						'@type' => 'Answer',
						'text'  => $faqPage->answer
					]
				];
			}
		}

		if ( empty( $subGraphs ) ) {
			return [];
		}

		$data = $this->getMainGraph( $subGraphs );

		return $data;
	}

	/**
	 * Returns the main FAQ graph with all its subgraphs (questions/answers).
	 *
	 * @since 4.2.3
	 *
	 * @param  array $subGraphs The subgraphs.
	 * @return array            The main graph data.
	 */
	public function getMainGraph( $subGraphs = [] ) {
		if ( empty( $subGraphs ) ) {
			return [];
		}

		return [
			'@type'      => 'FAQPage',
			'@id'        => aioseo()->schema->context['url'] . '#faq',
			'url'        => aioseo()->schema->context['url'],
			'inLanguage' => get_bloginfo( 'language' ),
			'isPartOf'   => [ '@id' => trailingslashit( home_url() ) . '#website' ],
			'breadcrumb' => [ '@id' => aioseo()->schema->context['url'] . '#breadcrumblist' ],
			'mainEntity' => $subGraphs
		];
	}
}