{
    "feed": {
        "entry": {
            "year": <#if subject.findValue("yearOfPublication")??>"${subject.findValue("yearOfPublication")?json_string}"<#else>""</#if>
        }
    }
}
