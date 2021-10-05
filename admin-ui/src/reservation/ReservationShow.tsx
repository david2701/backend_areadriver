import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Arrivée" source="arrivE" />
        <TextField
          label="Commentaires Supplémentaires"
          source="commentairesSupplMentaires"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Départ" source="dPart" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre de personnes" source="nombreDePersonnes" />
        <TextField label="Nom du client" source="nomDuClient" />
        <TextField label="Quand" source="quand" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vol" source="vol" />
      </SimpleShowLayout>
    </Show>
  );
};
