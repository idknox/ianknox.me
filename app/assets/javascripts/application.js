// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
  var crypt = (function () {

    var public = {},
      private = {};

    // Initiate cipher object
    private._cipher = {};

    public.decrypt = function (key, encryptedString) {
      var decryptedString = [];
      for (var i = 0; i < encryptedString.length; i++) {
        var letter = encryptedString[i];
        var charCode = private._cipher[letter](key + encryptedString.indexOf(letter));
        decryptedString.push(String.fromCharCode(charCode));
      }
      console.log(decryptedString.join(''));
      return decryptedString.join('');
    };

    public.setCipher = function (cipherObject) {
      private._cipher = cipherObject;
    };

    return public;

  })();

var encryptedText = 'feyuuowqoakddotzoj',
  cipher = {};
cipher.a = function( x ) { return Math.floor( x * x / 11 ); };
cipher.b = function( x ) { return (x + 17) / 71; };
cipher.c = function( x ) {return x * x * x;  };
cipher.d = function( x ) { return -((x + 6) - (x * 6)); };
cipher.e = function( x ) { return x * 8; };
cipher.f = function( x ) { return x + 55; };
cipher.g = function( x ) { return Math.floor( x * Math.PI ); };
cipher.h = function( x ) { return ( x + x + 12 ) * 2; };
cipher.i = function( x ) { return ( x % 3 ) * 7; };
cipher.j = function( x ) { return (((x + 1) + '' + (x + 1)) % x) * 20; };
cipher.k = function( x ) { return x * 3 + 5; };
cipher.l = function( x ) { var y = Math.ceil( x / 27 ); return x * y * 10; };
cipher.m = function( x ) { return x; };
cipher.n = function( x ) { return x * x * x - x * x / 2; };
cipher.o = function( x ) { return ( x * 6) + 5; };
cipher.p = function( x ) { return x % 5 + 20; };
cipher.q = function( x ) { return Math.ceil(( x * x ) / 3 + 13) - x; };
cipher.r = function( x ) { return Math.floor( 2 / x ); };
cipher.s = function( x ) { return 1 * x * 3 * x * 3 / 7; };
cipher.t = function( x ) { var y = Math.floor((Math.random() * (x-12)) + 1); r = 2 * y * 5; r = r / y - 7; return r * 37 + 1; };
cipher.u = function( x ) { return (51 - x) + (21 + x) + ((x - 3) * 3); };
cipher.v = function( x ) { return x + 2; };
cipher.w = function( x ) { return Math.floor( x / 3 ) * 22; };
cipher.x = function( x ) { return Math.floor(1 / x) * (x / 2); };
cipher.y = function( x ) { return (x * 7) - 1; };
cipher.z = function( x ) { return x * 5 + 1; };

crypt.setCipher( cipher );
for (var i = 0; i < 26; i++) {
    crypt.decrypt(i, encryptedText);
}

});