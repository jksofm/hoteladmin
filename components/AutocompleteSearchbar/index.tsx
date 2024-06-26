import React, { ChangeEvent } from "react";
import { useController, Control, FieldValues, Path } from "react-hook-form";
import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export type AutoCompleteFieldProps<T, K extends FieldValues> = Partial<
  AutocompleteProps<T, boolean, boolean, boolean>
> & {
  name: Path<K>;
  control: Control<K>;

  placeholder?: string;
  options: T[];
  getOptionLabel: (option: T | any) => string;
  label?: string;
  onChange: (selectedOptions: T[]) => void;
};
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function AutoCompleteSearhbar<T, K extends FieldValues>({
  name,
  onChange: externalOnChange,
  control,
  placeholder,
  label,
  options,
  getOptionLabel,
  isOptionEqualToValue,
  ...rest
}: AutoCompleteFieldProps<T, K>) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      fullWidth
      size="small"
      disableCloseOnSelect
      options={options}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {getOptionLabel(option) || "-"}
        </li>
      )}
      style={{ width: "70%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ margin: "12px 0" }}
          name={name}
          label={label}
          placeholder={placeholder}
          error={!!error}
          helperText={error?.message}
        />
      )}
      onChange={(event, value: any) => {
        externalOnChange(value);
        onChange(value);
      }}
      onBlur={onBlur}
      value={value}
      ref={ref}
    />
  );
}
