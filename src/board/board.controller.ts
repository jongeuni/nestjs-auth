import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { AuthGuard } from '../jwt/auth.guard';

@UseGuards(AuthGuard) // 클래스에 가드 적용
@Controller('board')
@ApiBearerAuth('access-token')
export class BoardController {
  constructor(private readonly boardService: BoardService) {
  }
  @Get()
  @ApiOperation({
    summary: 'board-list',
    description: 'read board list - need token'
  })
  async readList(/**@CurrentUser() user: CurrentUserPayload*/) {
    return this.boardService.dummyBoardList();
  }
}
