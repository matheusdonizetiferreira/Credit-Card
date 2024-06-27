import { View, Text } from "react-native"
import { styles } from "./styles"

export function CreditCard() {
    return(
    <View>
        <View style={[styles.card, styles.front]}>
            {/*cabeçalho*/}
            <View style={styles.header}>
                <View style={[styles.circle, styles.logo]} />
                <Text>Bank Card</Text>
            </View>

            {/*footer*/}
            <View style={styles.footer}>
                <Text style={styles.name}>Matheus Ferreira</Text>

                {/*a flag é a bandeira do cartão*/}
                <View style={styles.flag}>
                    <View style={[styles.circle, styles.red]} />
                    <View style={[styles.circle, styles.
                        orange]} />
                </View>
            </View>
        </View>

        {/* <View style={[styles.card, styles.black]}>

        </View> */}
    </View>
)}