<?php
get_header();
?>
<main class="max-w-7xl mx-auto px-6 py-16">
    <article class="prose lg:prose-xl">
        <?php if (have_posts()): while (have_posts()): the_post(); ?>
            <h1><?php the_title(); ?></h1>
            <div><?php the_content(); ?></div>
        <?php endwhile; endif; ?>
    </article>
</main>
<?php
get_footer();
?>
