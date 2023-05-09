{
    "feed": {
        "entry": {
            "name": <#if subject.findValue("primaryFullCreatorName")??>"${subject.findValue("primaryFullCreatorName")?json_string}"<#else>""</#if>
        }
    }
}
