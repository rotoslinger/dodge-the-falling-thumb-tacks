namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
4 4 4 4 4 4 4 4 
4 f f 4 4 f f 4 
4 f f 4 4 f f 4 
4 4 4 4 4 4 4 4 
4 f 4 4 4 4 f 4 
4 4 f f f f 4 4 
4 4 4 4 4 4 4 4 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000202020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tileDarkGrass3],
            TileScale.Sixteen
        ))
scene.setBackgroundColor(9)
mySprite.ay = 800
forever(function () {
    pause(1000)
    info.changeScoreBy(1)
})
forever(function () {
    pause(500)
    projectile = sprites.createProjectileFromSide(img`
8 6 8 
. 8 . 
. 6 . 
. 8 . 
`, 0, 100)
    tiles.placeOnRandomTile(projectile, sprites.castle.tilePath5)
})
