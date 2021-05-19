<!DOCTYPE html>
<html lang="en">

<html>
  <?php
    get_header();
  ?>
  <body>
    <section>
      <?php
        if( have_posts() ){
          while( have_posts() ){
            the_post();
            the_content();
          }
        }
      ?>
    </section>
  </body>
  <?php
      get_footer();
  ?>
</html>