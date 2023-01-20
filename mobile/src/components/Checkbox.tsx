import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import colors from "tailwindcss/colors";

interface CheckboxProps extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function Checkbox({ checked = false, title, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {
        checked
          ?
          <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center border-2 border-green-600">
            <Feather
              name="check"
              size={20}
              color={colors.white}
            />
          </View>
          :
          <View
            className='h-8 w-8 bg-zinc-900 rounded-lg border-2 border-zinc-800'
          />
      }

      <Text className='text-white text-base ml-3 font-semibold'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}