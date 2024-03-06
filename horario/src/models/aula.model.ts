import {Entity, model, property} from '@loopback/repository';

@model()
export class Aula extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  disciplina: string;

  @property({
    type: 'string',
    required: false,
  })
  curso: string;

  @property({
    type: 'number',
    required: false,
  })
  ano?: number;

  @property({
    type: 'string',
  })
  turma?: string;

  @property({
    type: 'string',
  })
  sala?: string;

  @property({
    type: 'date',
    required: true,
  })
  data: Date;

  @property({
    type: 'string',
    required: true,
  })
  hora_inicio: string;

  @property({
    type: 'number',
    required: true,
  })
  duracao: number;

  constructor(data?: Partial<Aula>) {
    super(data);
  }
}

export interface AulaRelations {
  // describe navigational properties here
}

export type AulaWithRelations = Aula & AulaRelations;
