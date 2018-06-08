import { Seeder } from 'edmunds'
import MyEntity from '../entity/myentity'
import * as faker from 'faker'
import { Connection } from 'typeorm'

export default class MyEntitySeeder extends Seeder {
  /**
   * Call the seeder
   * @returns {Promise<void>}
   */
  async call (): Promise<void> {
    const count = 10

    const entities: MyEntity[] = []
    for (let i = 0; i < count; ++i) {
      const entity = new MyEntity()
      entity.title = faker.lorem.sentence()
      entity.text = faker.lorem.sentences(5)

      entities.push(entity)
    }

    const connection: Connection = await this.edmunds.database()
    // const repository = connection.getRepository(MyEntity)

    console.log(`  Saving ${count} MyEntity's`)
    await connection.manager.save(entities)
    console.log(`  Finished saving ${count} MyEntity's`)
  }
}
