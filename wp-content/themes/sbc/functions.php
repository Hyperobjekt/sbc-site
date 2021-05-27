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
    add_theme_support( 'disable-custom-colors' );
    add_theme_support( 'editor-color-palette', 
      array(
        array(
          'name'  => esc_html__( 'Blue', 'themeLangDomain' ),
          'slug' => 'blue',
          'color' => '#1475b0',
        ),
        array(
          'name'  => esc_html__( 'Link Blue', 'themeLangDomain' ),
          'slug' => 'link-blue',
          'color' => '#1B86C8',
        ),
        array(
          'name'  => esc_html__( 'Light Blue', 'themeLangDomain' ),
          'slug' => 'light-blue',
          'color' => '#f1f6f9',
        ),
        array(
          'name'  => esc_html__( 'Text Medium Gray', 'themeLangDomain' ),
          'slug' => 'text-medium-gray',
          'color' => '#454545',
        ),
        array(
          'name'  => esc_html__( 'Text Dark Gray', 'themeLangDomain' ),
          'slug' => 'text-dark-gray',
          'color' => '#2A2A2A',
        ),
        array(
          'name'  => esc_html__( 'Background Yellow', 'themeLangDomain' ),
          'slug' => 'background-yellow',
          'color' => '#f6cf0d',
        ),
        array(
          'name'  => esc_html__( 'Button Gray', 'themeLangDomain' ),
          'slug' => 'button-gray',
          'color' => '#555555',
        ),
        array(
          'name'  => esc_html__( 'Text Red', 'themeLangDomain' ),
          'slug' => 'text-red',
          'color' => '#D02026',
        ),
        array(
          'name'  => esc_html__( 'Background Red', 'themeLangDomain' ),
          'slug' => 'background-red',
          'color' => '#aa1b20',
        ),
        array(
          'name'  => esc_html__( 'White', 'themeLangDomain' ),
          'slug' => 'white',
          'color' => '#fff',
        ),
		  )
    );
  }
  

  function sbc_register_styles() {
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style( 'twentytwentyone', get_template_directory_uri().'/style.css' );
    wp_enqueue_style('sbc', get_stylesheet_directory_uri(  ) . '/style.css', array( 'twentytwentyone' ), $version);
  }

  add_action('init', 'sbc_menus');
  add_action('after_setup_theme', 'sbc_theme_support', 100);
  add_action('wp_enqueue_scripts', 'sbc_register_styles');

?>