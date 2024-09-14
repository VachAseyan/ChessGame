//knight

class Chess {
    canvas = document.getElementById("board")
    ctx = this.canvas.getContext("2d")

    constructor() {
        this.drawBoard()
        document.getElementById("knightBtn").onclick = () => this.putKnight()
        document.getElementById("kingBtn").onclick = () => this.putKing()
        document.getElementById("elephantBtn").onclick = () => this.putElephant()
    }

    drawBoard() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.ctx.fillStyle = (i + j) % 2 == 0 ? "red" : "black"
                this.ctx.fillRect(50 + 70 * i, 50 + 70 * j, 70, 70)
            }
        }
        this.addNumbers()
        this.addLetters()
    }

    addLetters() {
        let letters = "ABCDEFGH"
        this.ctx.font = "30px Tahoma"
        this.ctx.fillStyle = "black"
        for (let i = 0; i < 8; i++) {
            this.ctx.fillText(letters[i], 75 + 70 * i, 35)
        }
    }

    getCoordinates(code) {
        let letters = "ABCDEFGH"
        let [x, y] = [...code]
        x = letters.indexOf(x.toUpperCase())
        y = 8 - parseInt(y)
        return [x, y]
    }

    addNumbers() {
        this.ctx.font = "30px Tahoma"
        this.ctx.fillStyle = "black"
        for (let i = 0; i < 8; i++) {
            this.ctx.fillText(8 - i, 10, 100 + 70 * i)
        }
    }

    putKnight() {
        let code = prompt("Please enter the position of knight (e.g., E4)")
        const pattern = /^[A-H][1-8]$/

        if (!pattern.test(code)) {
            alert("Error: Please enter a correct position.")
            return
        }

        let [x, y] = this.getCoordinates(code)

        let img = new Image()
        img.src = "images.png"
        img.onload = () => this.ctx.drawImage(img, 50 + 70 * x, 50 + 70 * y, 70, 70)

        let moves = [
            [x + 1, y - 2],
            [x - 1, y - 2],
            [x + 2, y - 1],
            [x + 2, y + 1],
            [x - 2, y + 1],
            [x - 2, y - 1],
            [x + 1, y + 2],
            [x - 1, y + 2]
        ]
            .filter(([x, y]) => x >= 0 && y >= 0 && x < 8 && y < 8)
            .forEach(([x, y]) => {
                this.ctx.fillStyle = "white"
                this.ctx.fillRect(50 + 70 * x, 50 + 70 * y, 70, 70)
            })
    }
}

let app = new Chess()


//king 

// class Chess {
//     canvas = document.getElementById("board")
//     ctx = this.canvas.getContext("2d")

//     constructor() {
//         this.drawBoard()
//         document.getElementById("knightBtn").onclick = () => this.putKnight()
//         document.getElementById("kingBtn").onclick = () => this.putKing()
//         document.getElementById("elephantBtn").onclick = () => this.putElephant()
//     }

//     drawBoard() {
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 8; j++) {
//                 this.ctx.fillStyle = (i + j) % 2 == 0 ? "red" : "black"
//                 this.ctx.fillRect(50 + 70 * i, 50 + 70 * j, 70, 70)
//             }
//         }
//         this.addNumbers()
//         this.addLetters()
//     }

//     addLetters() {
//         let letters = "ABCDEFGH"
//         this.ctx.font = "30px Tahoma"
//         this.ctx.fillStyle = "black"
//         for (let i = 0; i < 8; i++) {
//             this.ctx.fillText(letters[i], 75 + 70 * i, 35)
//         }
//     }

//     getCoordinates(code) {
//         let letters = "ABCDEFGH"
//         let [x, y] = [...code]
//         x = letters.indexOf(x.toUpperCase())
//         y = 8 - parseInt(y)
//         return [x, y]
//     }

//     addNumbers() {
//         this.ctx.font = "30px Tahoma"
//         this.ctx.fillStyle = "black"
//         for (let i = 0; i < 8; i++) {
//             this.ctx.fillText(8 - i, 10, 100 + 70 * i)
//         }
//     }


//     putKing() {
//         let code = prompt("Please enter the position of king (e.g., E4)")
//         const pattern = /^[A-H][1-8]$/
//         if (!pattern.test(code)) {
//             alert("Error: Please enter a correct position.")
//             return
//         }

//         let [x, y] = this.getCoordinates(code)

//         let img = new Image()
//         img.src = "king.png"
//         img.onload = () => this.ctx.drawImage(img, 50 + 70 * x, 50 + 70 * y, 70, 70)

//         let moves = [
//             [x + 1, y],
//             [x - 1, y],
//             [x, y + 1],
//             [x, y - 1],
//             [x + 1, y + 1],
//             [x - 1, y - 1],
//             [x + 1, y - 1],
//             [x - 1, y + 1]
//         ]
//             .filter(([x, y]) => x >= 0 && y >= 0 && x < 8 && y < 8)
//             .forEach(([x, y]) => {
//                 this.ctx.fillStyle = "white"
//                 this.ctx.fillRect(50 + 70 * x, 50 + 70 * y, 70, 70)
//             })
//     }


// }

// let app = new Chess()

// class Chess {
//     canvas = document.getElementById("board")
//     ctx = this.canvas.getContext("2d")

//     constructor() {
//         this.drawBoard()
//         document.getElementById("knightBtn").onclick = () => this.putKnight()
//         document.getElementById("kingBtn").onclick = () => this.putKing()
//         document.getElementById("elephantBtn").onclick = () => this.putElephant()
//     }

//     drawBoard() {
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 8; j++) {
//                 this.ctx.fillStyle = (i + j) % 2 == 0 ? "red" : "black"
//                 this.ctx.fillRect(50 + 70 * i, 50 + 70 * j, 70, 70)
//             }
//         }
//         this.addNumbers()
//         this.addLetters()
//     }

//     addLetters() {
//         let letters = "ABCDEFGH"
//         this.ctx.font = "30px Tahoma"
//         this.ctx.fillStyle = "black"
//         for (let i = 0; i < 8; i++) {
//             this.ctx.fillText(letters[i], 75 + 70 * i, 35)
//         }
//     }

//     getCoordinates(code) {
//         let letters = "ABCDEFGH"
//         let [x, y] = [...code]
//         x = letters.indexOf(x.toUpperCase())
//         y = 8 - parseInt(y)
//         return [x, y]
//     }

//     addNumbers() {
//         this.ctx.font = "30px Tahoma"
//         this.ctx.fillStyle = "black"
//         for (let i = 0; i < 8; i++) {
//             this.ctx.fillText(8 - i, 10, 100 + 70 * i)
//         }
//     }


//     putElephant() {
//         let code = prompt("Please enter the position of elephant (e.g., E4)")
//         const pattern = /^[A-H][1-8]$/
//         if (!pattern.test(code)) {
//             alert("Error: Please enter a correct position.")
//             return
//         }

//         let [x, y] = this.getCoordinates(code)

//         let img = new Image()
//         img.src = "elephant.png"
//         img.onload = () => this.ctx.drawImage(img, 50 + 70 * x, 50 + 70 * y, 70, 70)

//         let moves = []
//         for (let i = 1; i < 8; i++) {
//             moves.push([x + i, y + i], [x - i, y - i], [x + i, y - i], [x - i, y + i])
//         }
//         moves
//             .filter(([x, y]) => x >= 0 && y >= 0 && x < 8 && y < 8)
//             .forEach(([x, y]) => {
//                 this.ctx.fillStyle = "white"
//                 this.ctx.fillRect(50 + 70 * x, 50 + 70 * y, 70, 70)
//             })
//     }
// }

// let app = new Chess()


