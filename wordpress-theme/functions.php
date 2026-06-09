<?php
function netplace_enqueue_styles() {
    wp_enqueue_style('netplace-theme-style', get_template_directory_uri() . '/assets/css/theme.css', array(), filemtime(get_template_directory() . '/assets/css/theme.css'));
}
add_action('wp_enqueue_scripts', 'netplace_enqueue_styles');

function netplace_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    add_theme_support('automatic-feed-links');
}
add_action('after_setup_theme', 'netplace_theme_setup');
