<?php
/*
  Plugin Name: Chaty
  Contributors: galdub, tomeraharon
  Description: Chat with your website visitors via their favorite channels. Show a chat icon on the bottom of your site and communicate with your website visitors.
  Author: Premio
  Author URI: https://premio.io/downloads/chaty/
  Text Domain: chaty
  Domain Path: /languages
  Version: 3.4.6
  License: GPLv3
*/

if (!defined('ABSPATH')) {
    exit;
}


define('CHT_FILE', __FILE__); // this file
if(!defined('CHT_OPT')) {
    define('CHT_OPT', 'chaty');
}
define('CHT_DIR', dirname(CHT_FILE)); // our directory
define('CHT_ADMIN_INC', CHT_DIR . '/admin');
define('CHT_FRONT_INC', CHT_DIR . '/frontend');
define('CHT_INC', CHT_DIR . '/includes');
define('CHT_PRO_URL', admin_url("admin.php?page=chaty-app-upgrade"));
define('CHT_PLUGIN_URL', plugin_dir_url(__FILE__));
define('CHT_PLUGIN_BASE', plugin_basename(CHT_FILE));
define('CHT_VERSION', "3.4.6");
if(!defined('CHT_DEV_MODE')) {
    define('CHT_DEV_MODE', false);
}
if (!function_exists('wp_doing_ajax')) {
    function wp_doing_ajax()
    {
        /**
         * Filters whether the current request is a WordPress Ajax request.
         *
         * @since 4.7.0
         *
         * @param bool $wp_doing_ajax Whether the current request is a WordPress Ajax request.
         */
        return apply_filters('wp_doing_ajax', defined('DOING_AJAX') && DOING_AJAX);
    }
}

if(!function_exists("cht_clear_all_caches")) {
    function cht_clear_all_caches()
    {
        /* Clear cookies from browser */
        if (isset($_COOKIE['chaty_settings'])) {
            setcookie("chaty_settings", '', time() - 3600, "/");
            setcookie("cta_exit_intent_shown", '', time() - 3600, "/");
        }
        if(isset($_COOKIE['chatyWidget_0'])) {
            setcookie("chatyWidget_0", '', time() - 3600, "/");
        }
        for($i=1; $i<=20; $i++) {
            if(isset($_COOKIE['chatyWidget__'.$i])) {
                setcookie('chatyWidget__'.$i, '', time() - 3600, "/");
            }
        }
        try {
            global $wp_fastest_cache;
            // if W3 Total Cache is being used, clear the cache
            if (function_exists('w3tc_flush_all')) {
                w3tc_flush_all();

            }
            /* if WP Super Cache is being used, clear the cache */
            if (function_exists('wp_cache_clean_cache')) {
                global $file_prefix, $supercachedir;
                if (empty($supercachedir) && function_exists('get_supercache_dir')) {
                    $supercachedir = get_supercache_dir();
                }
                wp_cache_clean_cache($file_prefix);
            }
            if (class_exists('WpeCommon')) {
                //be extra careful, just in case 3rd party changes things on us
                if (method_exists('WpeCommon', 'purge_memcached')) {
                    //WpeCommon::purge_memcached();
                }
                if (method_exists('WpeCommon', 'clear_maxcdn_cache')) {
                    //WpeCommon::clear_maxcdn_cache();
                }
                if (method_exists('WpeCommon', 'purge_varnish_cache')) {
                    //WpeCommon::purge_varnish_cache();
                }
            }
            /* WP Fastest Cache Plugin */
            if (method_exists('WpFastestCache', 'deleteCache') && !empty($wp_fastest_cache)) {
                $wp_fastest_cache->deleteCache();
            }
            /* WP Rocket Plugin */
            if (function_exists('rocket_clean_domain')) {
                rocket_clean_domain();
                // Preload cache.
                if (function_exists('run_rocket_sitemap_preload')) {
                    run_rocket_sitemap_preload();
                }
            }
            /* Autoptimize Cache Plugin */
            if (class_exists("autoptimizeCache") && method_exists("autoptimizeCache", "clearall")) {
                autoptimizeCache::clearall();
            }
            /* LiteSpeed Plugin */
            if (class_exists("LiteSpeed_Cache_API") && method_exists("autoptimizeCache", "purge_all")) {
                LiteSpeed_Cache_API::purge_all();
            }
            /* Breeze Plugin */
            if (class_exists("Breeze_PurgeCache") && method_exists("Breeze_PurgeCache", "breeze_cache_flush")) {
                Breeze_PurgeCache::breeze_cache_flush();
            }
            /* Hummingbird */
            if (class_exists( '\Hummingbird\Core\Utils' ) ) {
                $modules   = \Hummingbird\Core\Utils::get_active_cache_modules();
                foreach ( $modules as $module => $name ) {
                    $mod = \Hummingbird\Core\Utils::get_module( $module );
                    if ( $mod->is_active() ) {
                        if ( 'minify' === $module ) {
                            $mod->clear_files();
                        } else {
                            $mod->clear_cache();
                        }
                    }
                }
            }
            /* WP Total Cache */
            if ( function_exists( 'wp_cache_clean_cache' ) ) {
                global $file_prefix;
                wp_cache_clean_cache( $file_prefix, true );
            }
        } catch (Exception $e) {
            return 1;
        }
    }
}
if(!function_exists("cht_init")) {
    function cht_init() {
        if(is_admin()) {
            require_once CHT_ADMIN_INC . '/chaty-timezone.php';
            require_once CHT_INC . '/class-review-box.php';
            require_once CHT_INC . '/class-affiliate.php';
            require_once CHT_INC . '/class-upgrade-box.php';
            require_once CHT_INC . '/class-email-signup.php';
        }
        require_once CHT_INC . '/class-cht-icons.php';
        require_once CHT_INC . '/class-frontend.php';
    }
    add_action( 'init' , 'cht_init' );
}


add_action('activated_plugin', 'cht_activation_redirect');

register_activation_hook(CHT_FILE, 'cht_install', 10);

function cht_install()
{
    $widgetSize = get_option('cht_numb_slug');
    $cht_devices = get_option('cht_devices');

    if (empty($widgetSize) && empty($cht_devices)) {
        $options = array(
            'mobile' => '1',
            'desktop' => '1',
        );

        update_option('cht_created_on', gmdate("Y-m-d"));
        update_option('cht_devices', $options);
        update_option('cht_position', 'right');
        update_option('cht_cta', 'Contact us');
        update_option('cht_numb_slug', ',Phone,Whatsapp');
        update_option('cht_social_whatsapp', '');
        update_option('cht_social_phone', '');
        update_option('cht_widget_size', '54');
        update_option('widget_icon', 'chat-base');
        update_option('cht_widget_img', '');
        update_option('cht_color', '#A886CD');
    }

    $popup_status = get_option("chaty_intro_popup");
    if($popup_status === false || empty($popup_status)) {
        add_option("chaty_intro_popup", "show");
    }

    $option = get_option("Chaty_show_affiliate_box_after");
    if($option === false || empty($option)) {
        $date = gmdate("Y-m-d", strtotime("+5 days"));
        add_option("Chaty_show_affiliate_box_after", $date);
    }
}

function cht_activation_redirect($plugin)
{
    if ($plugin == plugin_basename(__FILE__)) {
        if (!defined("DOING_AJAX") && $plugin == plugin_basename(__FILE__)) {
            delete_option("cht_redirect");
            add_option("cht_redirect",1);
        }
    }
}

function chaty_plugin_check_db_table() {
    global $wpdb, $pagenow;
    $page = filter_input(INPUT_GET, 'page');
    if ($pagenow == 'plugins.php' || ($page == 'chaty-app' || $page == 'chaty-upgrade' || $page == 'widget-analytics' || $page == 'chaty-contact-form-feed')) {
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        $charset_collate = $wpdb->get_charset_collate();
        $chaty_table = $wpdb->prefix . 'chaty_contact_form_leads';
        $query = "SHOW TABLES LIKE '".esc_sql($chaty_table)."'";
        if ($wpdb->get_var($query) != $chaty_table) {
            $chaty_table_settings = "CREATE TABLE {$chaty_table} (
				id bigint(11) NOT NULL AUTO_INCREMENT,
				widget_id int(11) NULL,
				name varchar(100) NULL,
				email varchar(100) NULL,
                phone_number varchar(100) NULL,
				message text NULL,
				ref_page text NULL,
				ip_address tinytext NULL,
				created_on datetime,
				PRIMARY KEY  (id)
			) $charset_collate;";
            dbDelta($chaty_table_settings);
        }

        /* version 2.7.3 change added new column */
        $column_name = 'phone_number';
        $field_check = $wpdb->get_var($wpdb->prepare("SHOW COLUMNS FROM {$chaty_table} LIKE %s", $column_name));
        if ('phone_number' != $field_check) {
            $wpdb->query("ALTER TABLE {$chaty_table} ADD phone_number VARCHAR(100) NULL DEFAULT NULL AFTER email");
        }
    }
}
add_action( 'admin_init' , 'chaty_plugin_check_db_table' );
