import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHAUFFEUR_TITLE_FIELD } from "./ChauffeurTitle";

export const ChauffeurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Chauffeur"
          source="chauffeur.id"
          reference="Chauffeur"
        >
          <TextField source={CHAUFFEUR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Modèle de voiture" source="modLeDeVoiture" />
        <TextField label="Nom du chauffeur" source="nomDuChauffeur" />
        <TextField
          label="Plaque d'immatriculation"
          source="plaqueDImmatriculation"
        />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Chauffeur"
          target="ChauffeurId"
          label="Chauffeur assigné"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Chauffeur"
              source="chauffeur.id"
              reference="Chauffeur"
            >
              <TextField source={CHAUFFEUR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Modèle de voiture" source="modLeDeVoiture" />
            <TextField label="Nom du chauffeur" source="nomDuChauffeur" />
            <TextField
              label="Plaque d'immatriculation"
              source="plaqueDImmatriculation"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
