import {
  Edmunds,
  Kernel as EdmundsKernel,
  Command
} from 'edmunds'
import * as commander from 'commander'
import SeedCommand from '../database/seedcommand'
import HelloWorldCommand from './command/helloworldcommand'

export default class Kernel extends EdmundsKernel {
  /**
   * Get commands
   */
  protected getCommands (): (new (program: commander.Command, app: Edmunds) => Command)[] {
    return [
      HelloWorldCommand,
      SeedCommand
    ]
  }
}
