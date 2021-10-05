import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Arrivée" source="arrivE" />
        <TextInput
          label="Commentaires Supplémentaires"
          multiline
          source="commentairesSupplMentaires"
        />
        <TextInput label="Départ" source="dPart" />
        <NumberInput
          step={1}
          label="Nombre de personnes"
          source="nombreDePersonnes"
        />
        <NumberInput step={1} label="Nom du client" source="nomDuClient" />
        <DateTimeInput label="Quand" source="quand" />
        <TextInput label="Vol" source="vol" />
      </SimpleForm>
    </Edit>
  );
};
