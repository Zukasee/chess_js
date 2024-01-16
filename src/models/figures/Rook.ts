import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";
import Black from '../../assets/BlackRook.png'
import White from '../../assets/WhiteRook.png'

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? Black : White
        this.name = FigureName.ROOK
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
        return false
    }
}