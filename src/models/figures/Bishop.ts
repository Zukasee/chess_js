import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";
import Black from '../../assets/BlackBishop.png'
import White from '../../assets/WhiteBishop.png'

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Black : White
        this.name = FigureName.BISHOP
    }

    canMoove(target: Cell): boolean {
        if (!super.canMoove(target)) {
            return false
        }
        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }
        return false
    }
}