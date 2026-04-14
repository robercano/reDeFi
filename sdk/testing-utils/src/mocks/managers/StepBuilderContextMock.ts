import { StepBuilderContext } from '@thesolidchain/protocol-plugins-common'

export class StepBuilderContextMock extends StepBuilderContext {
  public checkpoints: string[] = []

  constructor() {
    super()
  }

  public setCheckpoint(name: string) {
    this.checkpoints.push(name)
  }
}
