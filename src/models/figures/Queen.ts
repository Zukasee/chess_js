import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";
import Black from '../../assets/BlackQueen.png'
import White from '../../assets/WhiteQueen.png'

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Black : White
        this.name = FigureName.QUEEN
    }

    canMoove(target: Cell): boolean {
        if (!super.canMoove(target)) {
            return false
        }
        if (this.cell.isEmptyVertical(target)) {
            return true
        }
        if (this.cell.isEmptyHorizontal(target)) {
            return true
        }
        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }
        return false
    }
}