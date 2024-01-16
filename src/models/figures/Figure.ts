import { Cell } from "../Cell";
import { Colors } from "../Colors";
import logo from '../../assets/1.jpg'

export enum FigureName {
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureName;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureName.FIGURE;
        this.id = Math.random();
    }

    canMoove(target: Cell) : boolean {
        if (target.figure?.color === this.color) {  
            return false
        }
        if (target.figure?.name === FigureName.KING) {
            return false
        }
        return true;
    }

    moveFigure(target: Cell) {
        
    }
}