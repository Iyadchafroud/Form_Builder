import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import type { Option } from "../types/baseForm";

function SingleSelect({ options }: { options: Option[] }) {
  return (
    <Select.Root>
      <Select.Trigger className="w-full px-3 py-2 border rounded-lg flex justify-between items-center">
        <Select.Value placeholder="Select an option" />
        <Select.Icon>
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-white border rounded-lg shadow-lg">
          <Select.Viewport className="p-1">
            {options.map((option: Option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="px-3 py-2 hover:bg-blue-50 rounded cursor-pointer"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export default SingleSelect;
