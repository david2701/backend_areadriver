import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHAUFFEUR_TITLE_FIELD } from "./ChauffeurTitle";

export const ChauffeurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
          reference="Reservation"
          target="ChauffeurId"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <TextField label="Arrivée" source="arrivE" />
            <TextField
              label="Commentaires Supplémentaires"
              source="commentairesSupplMentaires"
            />
            <ReferenceField
              label="Conducteur assigné"
              source="chauffeur.id"
              reference="Chauffeur"
            >
              <TextField source={CHAUFFEUR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Départ" source="dPart" />
            <TextField label="ID" source="id" />
            <TextField label="Nombre de personnes" source="nombreDePersonnes" />
            <TextField label="Nom du client" source="nomDuClient" />
            <TextField label="Quand" source="quand" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Vol" source="vol" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
