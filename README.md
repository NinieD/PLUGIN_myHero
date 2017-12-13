# PLUGIN_myHero
Plugin afin d'avoir une image en header

#### DEMO
[click ici](http://cepegra-labs.be/webdesign/2017/vdel/CSS_HTML/_DISCOVERY/PLUGIN_myHero/dist/)
## Hero simple

Pour avoir une image qui fait 100% de la fenêtre,
il vous suffit d'ajouter quelques lignes de code.
Et de mettre l'URL de l'image dans le data-url.

### Dans votre HTML :

```
<div class="container">
    <h1 class="title"> votre titre </h1>
    <div class="hero" data-url="URL de votre image">
    </div>
</div>

```
### Dans votre CSS :

```
.container{
    position: relative;

    width: 100%;
    height: 100vh;
}
.title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    z-index: 10;

}
.hero{
    width: 100%;
    height: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);

    background-size: content;

}

```
### Dans votre JS :

```
var url = $('.hero').data('url');
$('.hero').css({
    'background': "url("+ url +") no-repeat center",
    'background-size' : 'cover'
});

```

## Hero avec un filtre de couleur
Afin d'avoir une image qui fait 100% de la fenêtre et un filtre qui la recouvre.
il vous suffit d'ajouter quelques lignes de code.
Et de mettre l'URL de l'image dans le data-url.

Vous pouvez choisir à votre guise la couleur du filtre ainsi que son opacité, grâce aux data attribut dans le HTML.

#### Pour la couleur:
```
data-colorblock="ici votre couleur"
```

#### Pour l'opacité':
```
data-opacity="votre opacité située de 0 à 1"
```

### Dans votre HTML :

```
<div class="container">
    <h1 class="title"> votre titre </h1>
    <div class="filter filter-block" data-colorblock="votre couleur" data-opacity="votre opacité située de 0 à 1">
    </div>
    <div class="hero" data-url="URL de votre image">
    </div>
</div>

```
### Dans votre CSS :

```
.container{
    position: relative;

    width: 100%;
    height: 100vh;
}
.filter{
    width: 100%;
    height: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    z-index: 5;

}

.title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    z-index: 10;

}
.hero{
    width: 100%;
    height: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);

    background-size: content;

}

```
### Dans votre JS :
```
var url = $('.hero').data('url');
$('.hero').css({
    'background': "url("+ url +") no-repeat center",
    'background-size' : 'cover'
});

var colorblock = $('.filter-block').data('colorblock');
var opacity = $('.filter').data('opacity');

$('.filter-block').css({
    'background': colorblock,
    'opacity': opacity,
});
```


## Hero avec un filtre dégradé
Afin d'avoir une image qui fait 100% de la fenêtre et un filtre dégradé qui la recouvre.
il vous suffit d'ajouter quelques lignes de code.
Et de mettre l'URL de l'image dans le data-url.


Vous pouvez choisir à votre guise la composition du dégradé ainsi que l'opacité du filtre, grâce aux data attribut dans le HTML.

#### Pour la couleur du dégradé:
```
data-colorfirst="ici la première couleur de votre choix"

data-colorsecond="ici la deuxième couleur de votre choix"
```

#### Pour la direction du dégradé:
```
data-direction="ici la direction de votre choix, à savoir soit left, right, top ou bottom"

data-colorsecond="ici la deuxième couleur de votre choix"
```

#### Pour l'opacité':
```
data-opacity="votre opacité située de 0 à 1"
```


### Dans votre HTML :

```
<div class="container">
    <h1 class="title"> votre titre </h1>
    <div class="filter filter-gradient" data-colorfirst="votre 1ere couleur choisie" data-colorsecond="votre 2eme couleur choisie" data-direction="la direction du dégradé" data-opacity="votre opacité située de 0 à 1">
    </div>
    <div class="hero" data-url="URL de votre image">
    </div>
</div>

```


### Dans votre CSS :

```
.container{
    position: relative;

    width: 100%;
    height: 100vh;
}
.filter{
    width: 100%;
    height: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    z-index: 5;

}

.title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    z-index: 10;

}
.hero{
    width: 100%;
    height: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);

    background-size: content;
}

```
### Dans votre JS :
```
var url = $('.hero').data('url');
$('.hero').css({
    'background': "url("+ url +") no-repeat center",
    'background-size' : 'cover'
});

var opacity = $('.filter').data('opacity');

var colorfirst= $('.filter-gradient').data('colorfirst');
var colorsecond= $('.filter-gradient').data('colorsecond');
var direction=$('.filter-gradient').data('direction');

$('.filter-gradient').css({
    'background': "linear-gradient(to "+ direction +", "+ colorfirst +", "+ colorsecond +")",
    'opacity': opacity,
});
```
