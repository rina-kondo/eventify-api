import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiBearerAuth, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EventEntity } from './entities/event.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('events')
@ApiTags('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '予定作成API', description: '入力情報をもとに予定を新規作成します' })
  @ApiCreatedResponse({ type: EventEntity })
  async create(@Body() createEventDto: CreateEventDto) {
    return new EventEntity(await this.eventsService.create(createEventDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '予定一覧取得API', description: '予定情報一覧を取得します' })
  @ApiOkResponse({ type: EventEntity, isArray: true })
  async findAll() {
    const events = await this.eventsService.findAll();
    return events.map((event) => new EventEntity(event));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '指定イベント取得API', description: '指定した予定idからイベント情報を取得します' })
  @ApiOkResponse({ type: EventEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new EventEntity(await this.eventsService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'イベント更新API', description: '入力情報をもとに予定情報を更新します' })
  @ApiCreatedResponse({ type: EventEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateEventDto: UpdateEventDto) {
    return new EventEntity(await this.eventsService.update(id, updateEventDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '予定削除API', description: '指定idの予定情報を削除します' })
  @ApiOkResponse({ type: EventEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new EventEntity(await this.eventsService.remove(id));
  }
}
