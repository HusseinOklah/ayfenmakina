import { redirect } from "next/navigation";
import {unstable_setRequestLocale} from 'next-intl/server';


export default function page({params: {locale}}) {
    unstable_setRequestLocale(locale);
    return redirect('/en');
}
