import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { CurrentUser, CurrentUserPayload } from '../auth/auth.current-user';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';

@UseGuards(JwtAuthGuard) // 클래스에 가드 적용
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
  async readList(@CurrentUser() user: CurrentUserPayload) {
    console.log(user);
    return this.boardService.dummyBoardList();
  }
}
