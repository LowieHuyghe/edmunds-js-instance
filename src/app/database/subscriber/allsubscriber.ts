import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent
} from 'typeorm'

@EventSubscriber()
export class AllSubscriber implements EntitySubscriberInterface {
  /**
   * Called after entity is inserted to the database.
   */
  afterInsert (event: InsertEvent<any>): Promise<any> {
    console.log(this.constructor.name, 'afterInsert', event.entity.constructor.name)
    return
  }
}
