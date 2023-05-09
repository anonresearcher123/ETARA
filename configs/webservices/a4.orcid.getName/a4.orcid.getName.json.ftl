{
    "feed": {
        "entry": {
            "name": <#if subject.findValue("primaryFullCreatorName")??>"${subject.findValue("primaryFullCreatorName")?keep_before(" ")?substring(0,1)}. ${subject.findValue("primaryFullCreatorName")?keep_after_last(" ")?json_string}"<#else>""</#if>
        }
    }
}
