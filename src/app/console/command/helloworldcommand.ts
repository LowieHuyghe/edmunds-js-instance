import * as commander from 'commander'
import {
  Command,
  Edmunds,
  Seeder
} from 'edmunds'

export class HelloWorldCommand extends Command {
  /**
   * Register the command
   * @param {commander.Command} program
   * @return {commander.Command}
   */
  register (program: commander.Command): commander.Command {
    return program
      .command('helloworld')
      .description('Run Hello World!')
      .option('-w, --what <what>', 'Hello what?', 'World')
  }

  /**
   * Run the command
   * @param {any} options
   * @returns {Promise<void>}
   */
  async run (options: any): Promise<void> {
    console.log(`Hello ${options.what}!`)

    // this.program: commander.Command
    // this.edmunds: Edmunds
  }
}
