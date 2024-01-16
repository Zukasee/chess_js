import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";
import Black from '../../assets/BlackKing.png'
import White from '../../assets/WhiteKing.png'

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Black : White
        this.name = FigureName.KING
    }

    canMoove(target: Cell): boolean {
        if (!super.canMoove(target)) {
            return false
        }

        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)

        return ((dx === 1 && dy === 1) || (dx === 0 && dy === 1) || (dx === 1 && dy === 0))
    }
}