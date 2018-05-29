import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent
} from 'typeorm'
import MyEntity from '../entity/myentity'

@EventSubscriber()
export default class MyEntitySubscriber implements EntitySubscriberInterface<MyEntity> {
  /**
   * Returns the class of the entity to which events will listen.
   * If this method is omitted, then subscriber will listen to events of all entities.
   */
  listenTo () {
    return MyEntity
  }

  /**
   * Called before entity is inserted to the database.
   */
  beforeInsert (event: InsertEvent<MyEntity>): Promise<any> {
    console.log(this.constructor.name, 'beforeInsert', event.entity.title)
    return
  }
}
