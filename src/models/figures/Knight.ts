import { Figure, FigureName } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import Black from '../../assets/BlackKnight.png'
import White from '../../assets/WhiteKnight.png'

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Black : White
        this.name = FigureName.KNIGHT
    }    

    canMoove(target: Cell): boolean {
        if (!super.canMoove(target)) {
            return false
        }
        const dx = Math.abs(this.cell.x - target.x)       
        const dy = Math.abs(this.cell.y - target.y)


        return ((dx === 1 && dy === 2) || (dx === 2 && dy === 1))
    }
}