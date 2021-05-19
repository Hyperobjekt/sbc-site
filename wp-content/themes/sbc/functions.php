<?php

  function sbc_menus() {
    $locations = array(
      "primary" => "Desktop",
      "footer" => "Footer",
      "mobile" => "Mobile"
    );
    register_nav_menus( $locations );
  }

  //add dynamic title support
  function sbc_theme_support() {
    add_theme_support('title-tag');
  }
  

  function sbc_register_styles() {
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style('sbc-theme', get_template_directory_uri() . '/style.css', $version, 'all');
  }


  function sbc_register_parent_styles() {
    $parentTheme = wp_get_theme()->get('Template');
    wp_enqueue_style( 'parent-style', get_theme_root_uri().'/'.$parentTheme.'/style.css' );
  }

  add_action('init', 'sbc_menus');
  add_action('after_setup_theme', 'sbc_theme_support');
  add_action('wp_enqueue_scripts', 'sbc_register_styles');
  add_action( 'wp_enqueue_scripts', 'sbc_register_parent_styles' );

?>