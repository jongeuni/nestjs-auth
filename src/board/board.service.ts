import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  async dummyBoardList() {
    return this.createBoard();
  }

  private async createBoard() {
    return {
      boards: [
        {
          id: 1,
          title: 'hi dummy 1',
          content: 'test content...',
          userName: 'lee',
          userId: 1
        },
        {
          id: 1,
          title: 'hi dummy 1',
          content: 'test content...',
          userName: 'lee',
          userId: 1
        }
      ]
    };
  }
}
