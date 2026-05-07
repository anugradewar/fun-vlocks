<?php
/**
 * Plugin Name: Fun Vlocks
 * Description: Interesting and Fun Gutenberg Blocks to make your website feel alive.
 * Version: 1.0.0
 * Author: Anugra Dewa Ramadhan
 */

if (!defined('ABSPATH')) exit;

define('FUN_VLOCKS_DIR', plugin_dir_path( __FILE__ ));
define('FUN_VLOCKS_URL', plugin_dir_url( __FILE__ ));
define('FUN_VLOCKS_VER', '1.0.0');

class Functions {
    /**
     * Register blocks
     * 
     * @date 7/5/26
     * @since 1.0.0
     */
    public function register_blocks() {
        register_block_type( FUN_VLOCKS_DIR . '/blocks/build/number-counter' );
        register_block_type( FUN_VLOCKS_DIR . '/blocks/build/twinkling-text' );
    }
}

$functions = new Functions();
add_action('init', array($functions, 'register_blocks'));