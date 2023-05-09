{
    "movie": {
        "country": <#if subject.findValue("country")??>"${subject.findValue("country")?split(", ")?first}"<#else>""</#if>
    }
}
