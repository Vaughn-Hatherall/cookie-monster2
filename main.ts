let projectile: Sprite = null
scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    . . . . . . . . 1 1 1 . . . . . 
    . . . . 1 1 1 8 1 f 1 . . . . . 
    . . . . 1 f 1 8 1 1 1 8 . . . . 
    . . . 8 1 1 1 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 f f f f f f 8 8 . . . 
    . . . 8 8 f f f f f f 8 8 . . . 
    . . . 8 8 8 f f f f 8 8 8 . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . e e e f e e e e f e e e . . 
        . e e e e e e f e e e e e e e . 
        . e e f e e e e e f e e e f e . 
        . e e e e f e e e e e e e e e . 
        . e e e e e e e f e e f e e e . 
        . e f e e e e e e e e e e e e . 
        . e e e e f e e f e e e e f e . 
        . e e e e e e e e e e f e e e . 
        . e e e f e f e e e e e e e e . 
        . e e e e e e e e e e e e f e . 
        . . e e f e e e f e e e e e . . 
        . . . e e e e e e e e e e . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (mySprite.vx < 0) {
        projectile.image.flipX()
    }
})
