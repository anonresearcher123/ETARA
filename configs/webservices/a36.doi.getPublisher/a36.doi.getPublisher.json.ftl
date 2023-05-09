{
    "feed": {
        "entry": {
            "publisher": <#list subject.find("publishedAsPartOf") as book><#if book.findValue("publishedBy")??>"${book.findValue("publishedBy")?json_string}"<#else>""</#if></#list>
        }
    }
}
