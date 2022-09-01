<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb9d49ca32c0498ac78c6f2274079f63d
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'Nilambar\\Optioner\\' => 18,
            'Nilambar\\AdminNotice\\' => 21,
        ),
        'K' => 
        array (
            'Kirki\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Nilambar\\Optioner\\' => 
        array (
            0 => __DIR__ . '/..' . '/ernilambar/optioner/src',
        ),
        'Nilambar\\AdminNotice\\' => 
        array (
            0 => __DIR__ . '/..' . '/ernilambar/wp-admin-notice/src',
        ),
        'Kirki\\' => 
        array (
            0 => __DIR__ . '/..' . '/kirki-framework/url-getter/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb9d49ca32c0498ac78c6f2274079f63d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb9d49ca32c0498ac78c6f2274079f63d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitb9d49ca32c0498ac78c6f2274079f63d::$classMap;

        }, null, ClassLoader::class);
    }
}