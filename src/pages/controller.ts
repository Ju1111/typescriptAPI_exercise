import { JsonController, Get, Param } from 'routing-controllers'
import pagesById, { Page } from './data'
import { PageList } from './data'

@JsonController()
export default class PageController {

  @Get('/pages')
   allPages(): PageList {
      return { pages: Object.values(pagesById) }
   }

    @Get('/pages/:id')
    getPage(
      @Param('id') id: number
    ): Page {
      return pagesById[id]
    }
}
