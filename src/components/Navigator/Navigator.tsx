import React from "react";
import { useTranslations } from "next-intl";
import { navigation } from '../../../messages/en.json'

export default function Navigator() {
    const t = useTranslations('navigation')
    return (<div>
        {navigation.homepage.name}
    </div>);
}
