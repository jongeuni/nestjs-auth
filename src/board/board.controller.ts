import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {
  }
  @Get()
  @ApiOperation({
    summary: 'board-list',
    description: 'read board list - need token'
  })
  async readList() {
    return this.boardService.dummyBoardList();
  }
}
