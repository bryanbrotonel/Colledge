<html>
   <head>
      <title>Colledge</title>
      <meta name = 'viewport' content = 'width = device-width, initial-scale = 1'>
      <link rel = 'stylesheet' href = 'https://fonts.googleapis.com/icon?family=Material+Icons'>
      <link rel = 'stylesheet' href = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css'>
      <link rel = 'stylesheet' href = 'css/style.css'>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js'></script>
      <script src="js/typed.min.js" type="text/javascript"></script>
      <script type = 'text/javascript' src = 'js/main.js'></script>
   </head>

   <script>
   $(document).ready(function() {
    $('select').material_select();

    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      startDelay: 2000,
      typeSpeed: 140,
      backSpeed: 140,
      showCursor: false,
      smartBackspace: true,
      backDelay: 800,
    });
  });
  </script>

  <nav class="pink accent-1" role="navigation"></nav>

     <body class="grey lighten-5">
       <div class="hero-header">

       </div>
     <div class="section no-pad-bot" id="index-banner">
       <div class="container">
         <br><br>
           <div id="typed-strings">
             <p>College</p>
             <p>Colle^1900dge</p>
           </div>
         <h1 id="typed" class="header center orange-text">College</h1>
         <div class="row center">
           <h5 class="header col s12 light">We give you the edge in your colledge search</h5>
         </div>
         <br>
       </div>
     </div>


     <div class="container">
       <div class="section">

         <!--   Icon Section   -->
         <div class="row">
           <div class="col s12 m4">
             <div class="icon-block">
               <h2 class="center pink-text text-accent-1"><i class="medium material-icons">flash_on</i></h2>
               <h5 class="center">Smart</h5>

               <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
             </div>
           </div>

           <div class="col s12 m4">
             <div class="icon-block">
               <h2 class="center pink-text text-accent-1"><i class="medium material-icons">portrait</i></h2>
               <h5 class="center">Just For You</h5>

               <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
             </div>
           </div>

           <div class="col s12 m4">
             <div class="icon-block">
               <h2 class="center pink-text text-accent-1"><i class="medium material-icons">sentiment_very_satisfied</i></h2>
               <h5 class="center">Satisfaction Guaranteed</h5>

               <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
             </div>
           </div>
         </div>

       </div>
       <br><br>
     </div>
     <div class="row center">
       <a href="form.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started!</a>
     </div>
     <br><br>
   </body>

   <footer class="page-footer orange">
     <div class="container">
       <div class="row">
         <div class="col s6 left-align">
           <h5 class="white-text">Who Are We?</h5>
           <p class="grey-text text-lighten-4">We are one hour start up by a pair of college students.</p>
         </div>
         <div class="col s6 right-align">
           <h5 class="white-text">Connect</h5>
           <ul>
             <li><a class="white-text" href="https://www.facebook.com/">Facebook</a></li>
             <li><a class="white-text" href="https://twitter.com/">Twitter</a></li>
             <li><a class="white-text" href="https://www.instagram.com/">Instagram</a></li>
           </ul>
         </div>
       </div>
     </div>
     <div class="footer-copyright">
       <div class="container">
         Styling by the wonderfuls at  <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
       </div>
     </div>
   </footer>

</html>

<script>
$('#typed').typeIt({
  startDelay: 10000,
  startDelete: true,
  speed: 100,
  strings: 'Colledge'
});
</script>
