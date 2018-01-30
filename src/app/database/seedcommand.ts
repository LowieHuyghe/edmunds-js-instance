import {
  Edmunds,
  Seeder,
  SeedCommand as EdmundsSeedCommand
} from 'edmunds'
import { MyEntitySeeder } from './seeder/myentityseeder'

export class SeedCommand extends EdmundsSeedCommand {
  /**
   * Get seeders
   */
  protected getSeeders (): (new (app: Edmunds) => Seeder)[] {
    return [
      MyEntitySeeder
    ]
  }
}
