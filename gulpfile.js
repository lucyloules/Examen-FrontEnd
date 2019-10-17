var gulp = require('gulp');
var filter = require('gulp-filter');
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var gls = require('gulp-live-server');
var libDir = './node_modules';
var distDir = './dist';
var srcDir = './src';

gulp.task('js-app-dist', function(done) {
    var appFiles = [
        srcDir+'/app/app.config.js',
        srcDir+'/app/app.constants.js',
        srcDir+'/app/modules/home/homeController.js',
        srcDir+'/app/modules/banda/bandaController.js',
        srcDir+'/app/modules/discografia/discografiaController.js',
        srcDir+'/app/modules/obituario/obituarioController.js',
        srcDir+'/app/modules/contacto/contactoController.js',
        srcDir+'/app/modules/login/loginController.js',
        srcDir+'/app/modules/compra/compraController.js',
        srcDir+'/app/modules/tienda/tiendaController.js',
        srcDir+'/app/modules/dashboard/dashboardController.js',
        srcDir+'/app/shared/directives/util/utilDirectives.js',
        srcDir+'/app/shared/directives/public-nav/publicNavDirective.js',
        srcDir+'/app/shared/directives/public-aside/publicAsideDirective.js',
        srcDir+'/app/shared/directives/public-header/publicHeaderDirective.js',
        srcDir+'/app/shared/services/discoService.js',
        srcDir+'/app/shared/services/integranteService.js',
        srcDir+'/app/shared/services/postService.js',
        srcDir+'/app/shared/services/authService.js',
        srcDir+'/app/shared/services/productoService.js',
        srcDir+'/app/shared/services/authInterceptorService.js',
        srcDir+'/app/shared/services/localStorageService.js',
        srcDir+'/app/shared/services/sessionStorageService.js',
        srcDir+'/app/shared/services/dashboardService.js',
        srcDir+'/app/shared/services/comprasService.js',
        srcDir+'/app/shared/directives/private-aside/privateAsideDirective.js',
        srcDir+'/app/shared/directives/private-nav/privateNavDirective.js'
    ];

    gulp.src(appFiles)
    .pipe(concat('queen-app.js'))
    .pipe(gulp.dest(distDir+'/scripts/'))
    .pipe(concat('queen-app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distDir+'/scripts/'))
    .on('end', done)
});
gulp.task('js-lib-dist', function(done) {
    var libFiles = [libDir + '/angular/angular.min.js',
        libDir + '/angular-route/angular-route.min.js',
        libDir + '/angular-ui-bootstrap/ui-bootstrap.min.js',
        libDir + '/angular-resource/angular-resource.min.js'];

    gulp.src(libFiles)
        .pipe(concat('queen-lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(distDir+'/scripts/'))
        .on('end', done)
});

gulp.task('html-dist', function (done) {
    gulp.src([
        srcDir+'/**'
    ])
    .pipe(filter('**/*.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(distDir))
    .on('end', done)
});

gulp.task('css-app-dist', function(done) {
  	var libFiles = [
            srcDir + '/css/public-layout-one-column.css',
            srcDir + '/css/public-layout-two-columns.css',
            srcDir + '/css/private-layout-two-columns.css'
        ];

    gulp.src(libFiles)
        .pipe(minifyCss({
        keepSpecialComments: 0
    }))
    .pipe(concat('queen-app.min.css'))
    .pipe(gulp.dest(distDir+'/css/'))
    .on('end', done);
});

gulp.task('css-lib-dist', function(done) {
  	var libFiles = [
			libDir + '/bootstrap-css-only/css/bootstrap.min.css'
  		];

  	gulp.src(libFiles)
  	.pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(concat('queen-lib.min.css'))
    .pipe(gulp.dest(distDir+'/css/'))
    .on('end', done);
});

gulp.task('img-dist', function (done) {
    gulp.src([
        srcDir+'/img/**/*'
    ])
    .pipe(gulp.dest(distDir+'/img'))
    .on('end', done)
});

gulp.task('fonts-dist', function() {
    gulp.src([
        './node_modules/@neos21/bootstrap3-glyphicons/dist/fonts/**/*',
        './node_modules/open-sans-fonts/open-sans/Regular/**/*'
    ])
      .pipe(gulp.dest('./dist/fonts/'));
  });

gulp.task('default', ['js-lib-dist', 'js-app-dist', 'html-dist', 'css-lib-dist', 'css-app-dist', 'img-dist', 'fonts-dist']);