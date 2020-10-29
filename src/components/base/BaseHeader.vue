<template>
  <header class="header navbar-fixed">
    <div class="nav-wrapper">
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Logo</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger right">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav right" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
};
</script>
