import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAllergeni extends Struct.ComponentSchema {
  collectionName: 'components_shared_allergenis';
  info: {
    displayName: 'allergeni';
    icon: 'alien';
  };
  attributes: {
    codice: Schema.Attribute.Integer;
    nome: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.allergeni': SharedAllergeni;
    }
  }
}
